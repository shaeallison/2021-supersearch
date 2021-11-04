const Filters = (props) =>  {
  return (
    <form>
      <div>
        <label htmlFor='keyword'>Keyword</label>
        <input type='text' name='keyword' id='keyword' placeholder='keyword'/>
      </div>
      <div>
        <label htmlFor='gender'>Gender</label>
        <select id='gender'>
          <option>get options based on data</option>
        </select>
      </div>
      <div>
        <label htmlFor='alignment'>Alignment</label>
        <select id='alignment'>
          <option>get options based on data</option>
        </select>
      </div>
      <div>
        <label htmlFor='powerstats'>Powerstats</label>
        <select id='powerstats' multiple>
          <option>get options based on data</option>
        </select>
      </div>
      <div>
        <label htmlFor='intelligence'>Intelligence</label>
        <input type='range' id='intelligence' name='intelligence' min='0' max='100' />
      </div>
      {/* only show range conditionally based on power stats selections */}
      <div>
        <input type='submit' value='Submit'/>
      </div>
    </form>
  )
}

export default Filters
