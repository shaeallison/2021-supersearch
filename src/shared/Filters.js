const Filters = (props) =>  {
  const {heroes} = props
  const powerStatOptions = heroes.map(hero => Object.keys(hero.powerstats))
  const genderOptions = heroes.map(hero => hero.appearance.gender)
  const alignmentOptions = heroes.map(hero => hero.biography.alignment)

  const filteredArray = array => array.filter((item, index) => array.indexOf(item) === index)

  const mergedArrays = (arrays) => {
    let jointArray = []

    arrays.forEach(array => {
      jointArray = [...jointArray, ...array]
    })
    return [...new Set([...jointArray])]
  }

  return (
    <form>
      <div>
        <label htmlFor='keyword'>Keyword</label>
        <input type='text' name='keyword' id='keyword' placeholder='keyword'/>
      </div>
      <div>
        <label htmlFor='gender'>Gender</label>
        <select id='gender'>
          {filteredArray(genderOptions).map(option => <option key={option}>{option}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor='alignment'>Alignment</label>
        <select id='alignment'>
          {filteredArray(alignmentOptions).map(option => <option key={option}>{option}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor='powerstats'>Powerstats</label>
        <select id='powerstats' multiple>
          {mergedArrays(powerStatOptions).map(option => <option key={option}>{option}</option>)}
        </select>
      </div>
      {/* <div>
        <label htmlFor='intelligence'>Intelligence</label>
        <input type='range' id='intelligence' name='intelligence' min='0' max='100' />
      </div> */}
      {/* only show range conditionally based on power stats selections */}
      <div>
        <input type='submit' value='Submit'/>
      </div>
    </form>
  )
}

export default Filters
