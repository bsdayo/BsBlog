param (
    [Parameter(Mandatory)] [string] $Id,
    [Parameter(Mandatory)] [string] $Title
)

$date = Get-Date -Format "yyyy-MM-ddTHH:mm:ssK"
$postDir = Join-Path $PSScriptRoot "../posts/$Id"

New-Item -ItemType Directory -Path $postDir
@"
---
title: $Title
create: $date
---


"@ | Out-File -FilePath (Join-Path $postDir 'index.md')
