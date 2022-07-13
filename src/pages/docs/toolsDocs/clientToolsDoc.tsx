
const ClientToolsDoc = () => <>
  <h1> Client Tools </h1>
  <div className="doc-content">
    <h2>Make a Web Client</h2>
    <p>
      Creating a new basic web client with Overlord is easy! simply enter the following command (replace 'client_name'
      with your desired app/client/website title)<br/>
      <br/>
      <code>./o create -client_name</code><br/>
      <br/>
      Now you'll find the client you just created inside the 'clients' directory within your project.
    </p>
    <h2>Install a Client</h2>
    <p>
      Now you'll need to install your NPM packages that your client is dependent on<br/>
      <br/>
      <code>./o install -client_name</code><br/>
      <br/>
      Yep, it's that simple.
    </p>
    <h2>Run a Client</h2>
    <p>
      You'll probably want to launch your new client and see what's going on.<br/>
      <br/>
      <code>./o runclient -client_name</code><br/>
      <br/>
      Now that you've launched your first client; you can see that it has a dedicated localhost port. This port will be
      unique for your local development environment - so don't expect everyone on your team to have the same. But at
      least you will always be able to access that specific client from that specific localhost address.
    </p>
    <h2>Make a Universal App</h2>
    <p>
      Creating a new native client that can be deployed as an <b>Android App, iOS App & Web App</b> with Overlord is
      just as easy; simply enter the following command (replace 'client_name' with your desired app title)<br/>
      <br/>
      <code>./o create -native -client_name</code><br/>
      <br/>
      Now you'll find the client you just created inside the 'clients' directory within your project.
    </p>
  </div>
</>


export default ClientToolsDoc;
