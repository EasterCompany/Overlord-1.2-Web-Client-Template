# Client __init__.py
#   Edit this file to configure your integrations with this client and the Back End
#   Imports may show errors prior to installing this client. Follow the README.md for more.

# Overlord library
from core.library import client


class Client(client.WebClient):

    # Client.ENVIRONMENT [ local, staging, production... ]
    ENV = __file__.replace('__init__.py', '.env')

    # Client.NAME and directory name for this client source files should be identical
    NAME = 'app-name'

    # Client.PORT by default will be automatically determined if PORT is None.
    # otherwise you can specify a port number as a string.
    PORT = None

    # Client.API is a string representing which endpoint to connect to when making API
    # requests. By default, `http../api` will be used if API is set to `None`
    API = "api"

    # Client.PWA is a boolean which indicates whether or not to enable service workers
    PWA = False
