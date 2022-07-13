
const UnitTestDoc = () => <>
<h1> Unit Tests </h1>
<div className="doc-content">
  <h2>Making Unit Tests</h2>
  <p>
    Creating new unit tests for any part of Overlord, APIs or Clients is a simple process; create a folder anywhere
    within your project (you can make as many of these as you want) and name it 'tests'. Then create a file with the
    naming convention 'test_' something something '.py'<br/>
    <br/>
    <code>./tests/test_the_function.py</code><br/>
    <br/>
    Now inside of it write a function that follows the same convention of starting with 'test_':<br/>
    <code>
      def test_the_function():
        assert True
    </code><br/>
    <br/>
    Well done! you can now run the<br/>
    <br/>
    <code>./o test</code><br/>
    <br/>
    command and see that your unit test is running and passing successfully!
  </p>
</div>
</>


export default UnitTestDoc;
