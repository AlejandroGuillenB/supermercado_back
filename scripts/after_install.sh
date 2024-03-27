#!/bin/bash
echo 'run after_install.sh: ' >> /home/admin/supermercado_back/deploy.log

echo 'cd /home/admin/supermercado_back' >> /home/admin/supermercado_back/deploy.log
cd /home/admin/supermercado_back >> /home/admin/supermercado_back/deploy.log

echo 'npm install' >> /home/admin/supermercado_back/deploy.log 
npm install >> /home/admin/supermercado_back/deploy.log
