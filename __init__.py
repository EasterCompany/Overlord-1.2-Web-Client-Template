# Client __init__.py
#   Edit this file to configure your integrations with this client and the Back End
#   Imports may show errors prior to installing this client. Follow the README.md for more.

# Overlord library
from core.library import client, Path, dirname, realpath


class Client(client.WebClient):

    # Client.ENVIRONMENT [ local, staging, production... ]
    ENV = __file__.replace('__init__.py', '.env')

    # Client.DIR represents which sub-directory inside the 'clients/'
    # directory contains the source code for this client
    DIR = Path(dirname(realpath(__file__))).parts[-1]

    # Client.NAME represents what the stylized name of this client should be
    # for example; this is often used to set the HTML <title> element content
    NAME = DIR

    # Client.PORT by default will be automatically determined if PORT is None;
    # otherwise you can specify a port number as a string.
    PORT = None

    # Client.PWA is a boolean which indicates whether or not to enable
    # progressive web app features
    PWA = False
