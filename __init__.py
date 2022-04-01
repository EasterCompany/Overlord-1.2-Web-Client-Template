# Overlord library
from core.library import client

# Overlord configuration
from web import settings

# Version Control
__version__ = {
    'type': 'DEV',
    'major': 1,
    'minor': 0,
    'patch': 0,
    'release': 1
}


class Client(client.ClientObject):

    # Client.ENVIRONMENT [ local, staging, production... ]
    ENV = __file__.replace('__init__.py', '.env')

    # Client.NAME and directory name for this client source files should be identical
    NAME = 'default_react'

    # Client.PORT by default will be automatically determined if PORT is None.
    # otherwise you can specify a port number as a string.
    PORT = '8102'

    # Client.ENDPOINT hosts your react index
    ENDPOINT = NAME if not NAME == settings.INDEX else ''

    # Client.API is a string representing which endpoint to connect to when making API
    # requests. By default, `http../api` will be used if API is set to `None`
    API = "api"

    # Client.PWA is a boolean which indicates whether or not to enable service workers
    PWA = False
