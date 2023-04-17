import os
from dotenv import load_dotenv, find_dotenv
from flask_cors import CORS
from controllers import app

load_dotenv(find_dotenv())

CORS(app)
if __name__ == "__main__":
    app.run(debug=True)

