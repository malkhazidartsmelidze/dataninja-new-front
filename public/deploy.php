<?php
$build_dir = __DIR__ . '/../build';

exec("scp -P2221 -r $build_dir/* mydataninja.com@mydataninja.com:/home/mydataninja.com/public");
