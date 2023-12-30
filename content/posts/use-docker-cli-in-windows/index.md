---
title: 在 Windows 上使用 Docker CLI
create: 2023-12-19T09:05:03.899Z
# cover: /img/covers/use-docker-cli-in-windows.webp
tags:
  - windows
  - wsl
---

在 Windows 上使用 Docker 一般是通过 Docker Desktop，但是太重了，不是很想使用，于是切换到了在 WSL 中手动安装 Docker 的方案。

但是使用时还需要切换到 WSL 中操作，不是很方便。经过 [@AzureZeng](https://blog.azurezeng.com/) 的帮助，成功在 Windows 下安装了 Docker CLI，并连接到 WSL 中的 Docker daemon。这样就不用每次单独在 WSL 的终端里操作了。（但是 WSL 还是需要在运行的）

## 准备工作

在 Windows 上安装 Docker CLI，直接使用 winget 就可以：

```powershell
winget install Docker.DockerCLI
```

WSL 中根据各自发行版安装 Docker Engine，可以参考[官方文档](https://docs.docker.com/engine/install/)。

## 打开 WSL 中 Docker 的 TCP 远程访问

编辑 Docker 的 systemd 配置文件（一般在 `/lib/systemd/system/docker.service`）：

```ini
[Service]
ExecStart=/usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock
```

加一个 `-H` 选项，指定监听的主机和端口，变成这样：

```ini
[Service]
ExecStart=/usr/bin/dockerd -H tcp://127.0.0.1:2375 -H fd:// --containerd=/run/containerd/containerd.sock
```

保存，重启 Docker 服务：

```shell
sudo systemctl daemon-reload
sudo systemctl restart docker
```

## 配置 Docker CLI

接下来需要配置 Windows 下的 Docker CLI，令其使用 WSL 中的 Docker 服务。

先临时指定一下试试：

```powershell
docker -H tcp://127.0.0.1:2375 info
```

如果一切正常则可以通信。

接下来需要令 Docker CLI 默认连接到 WSL 中的 Docker daemon：

```powershell
# 为 WSL 中的 Docker 环境创建一个 context
docker context create wsl --docker "host=tcp://127.0.0.1:2375"

# 切换到这个 context
docker context use wsl
```

接下来再试试不带 `-H` 选项的 `docker info`，可以发现已经成功连接上了。
