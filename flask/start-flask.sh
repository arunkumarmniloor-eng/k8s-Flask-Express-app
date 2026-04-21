# Create the file
cat > ~/start-flask.sh << 'EOF'
#!/bin/bash
cd /home/ubuntu/flask-app
source venv/bin/activate
python3 app.py
EOF
#
# # Make it executable
chmod +x ~/start-flask.sh
