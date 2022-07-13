import cliExample from '../../../assets/docs/cliExample.png';


const ServerToolsDoc = () => <>
  <h1> Server Tools </h1>
  <div className="doc-content">

    <h2>Overlord-CLI</h2>
    <p>
      The first and most vital piece of Overlord is the "o" file. It will always be found at the root of all Overlord
      based project directories. Navigate to the your project inside a terminal and enter the Overlord-CLI by entering:
      <br/><br/>
      <code>./o</code>
      <br/><br/>
      You will know you've successfully entered the CLI when you see the Overlord ascii art.
      <img src={cliExample} alt="cli example"/>
      Once you've entered the CLI you will not need to enter './o' prior to each command line. Although if you wish to
      not enter the CLI and just enter a single command, by including the './o' file at the start of the line you will
      execute your command and stay within the scope of your terminal.<br/>
      <br/>
      You should try this by re-running the install command again.<br/>
      <br/>
      <code>./o</code> <br/>
      <code>install</code> <br/>
      <br/>
      VS.<br/>
      <br/>
      <code>./o install</code>
    </p>

    <h2>Auto Updates</h2>
    <p>
      Similarly to auto commits, we also have auto updates; big or small team it doesn't matter in your Overlord project
      you will at least have a server repository. You might also have a separate repository for your client - or even
      multiple clients. When they all share components with each other it's important to make sure your branches are
      always up-to-date.<br/>
      <br/>
      The auto update command will detect any repository in your projects scope and pull the latest changes from the
      current branch.
      <br/><br/>
      <code>./o pull</code>
      <br/><br/>
    </p>

    <h2>Auto Commits</h2>
    <p>
      You might want to avoid using this feature in a large-teams but, it's perfect for solo endeavors or small scale
      projects with a few developers. You can automatically add, commit and push everything you've done today to your
      project repository by simple using the push command.<br/>
      <br/>
      The auto commit command will detect any repository in your projects scope and push the latest changes to the
      current branch.
      <br/><br/>
      <code>./o push</code>
      <br/><br/>
    </p>

    <h2>Overlord-Cloud</h2>
    <p>
      Once you're ready to take your product to the moon and back, we can deploy it to a free-to-use cloud service known
      as Overlord-Cloud and we can moderate, administrate, content manage and more all from our E-Panel client.
      <br/><br/>
      <code>./o deploy</code>
      <br/><br/>
    </p>

  </div>
</>


export default ServerToolsDoc;
