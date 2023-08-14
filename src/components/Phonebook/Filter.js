export const Filter=({phoneFilter,changeFilter})=>{
    return(
        <label>
            Find contacts by name
            <input
              onChange={evt => changeFilter(evt.target.value)}
              value={phoneFilter}
            ></input>
          </label>
    )
}