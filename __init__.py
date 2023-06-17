# Client __init__.py
#   Edit this file to configure your integrations with this Client and the Server/API
#   Imports should be done within functions that use them to avoid initialization errors
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
  # otherwise you can specify a port as an integer.
  PORT:int|None = None

  # Client.PWA is a boolean which indicates whether or not to enable
  # progressive web app features
  PWA:bool = False

  def __init__(self) -> None:
    super().__init__()

  def __urls__(self, *args, **kwargs) -> list:
    '''
    Generates an additional url map for this client, each item should use the self.path
    function to create an endpoint.
    '''
    return []

  def __context__(self, req, *args, **kwargs) -> dict:
    '''
    Generates a context dictionary which is provided to the HTML Template, each value can
    be rendered inside the index.html file by calling the key with {{ handle_bar }} variables.
    '''
    page = self.current_view(req)
    page_title = "Example 404 Page" if page == "404" else self.NAME
    return {
      "page_title": page_title
    }
