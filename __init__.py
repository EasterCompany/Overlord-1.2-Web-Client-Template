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

  def __init__(self) -> None:
    super().__init__()

  def __urls__(self, *args, **kwargs) -> list:
    '''
    Generates an additional url map for this client, for example:

      [
        self.path("script.js", self.serve_file("script.js"), "serves the script.js file"),
        ...
      ]

    :param self: the client class
    :return list: the additional url map
    '''
    return []

  def __context__(self, req, *args, **kwargs) -> dict:
    '''
    Generates a context dictionary which is provided to the HTML Template, for example:

      {
        'page_title': 'some page title',
        ...
      }

      then sets the {{ page_title }} tag in the index.html file to 'some page title'

    :param self: the client class
    :param req: the user request object
    :return dict: the context dictionary
    '''
    return {}
