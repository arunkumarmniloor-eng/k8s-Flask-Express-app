cat > ~/start-express.sh << 'EOF'
#!/bin/bash
cd /home/ubuntu//k8s-Flask-Express-app/Express
node app.js
EOF
#
## Make it executable
chmod +x ~/start-express.sh
