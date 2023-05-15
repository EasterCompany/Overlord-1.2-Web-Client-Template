# Client __init__.py
#   Edit this file to configure your integrations with this client and the Back End
#   Imports may show errors prior to installing this client. Follow the README.md for more.

# Overlord library
from core.library import Path, client, dirname, realpath


class Client(client.WebClient):

    # Client.ENVIRONMENT [ local, staging, production... ]
    ENV:str = __file__.replace('__init__.py', '.env')

    # Client.DIR represents which sub-directory inside the 'clients/'
    # directory contains the source code for this client
    DIR:str = Path(dirname(realpath(__file__))).parts[-1]

    # Client.NAME represents what the stylized name of this client should be
    # for example; this is often used to set the HTML <title> element content
    NAME:str = DIR

    # Client.PORT by default will be automatically determined if PORT is None;
    # otherwise you can specify a port number as a string.
    PORT:str|None = None

    # Client.PWA is a boolean which indicates whether or not to enable
    # progressive web app features
    PWA:bool = False

    def __context__(self, req, *args, **kwargs) -> dict:
        ''' Generates a context dictionary which is provided to the HTML Template '''
        return {}
