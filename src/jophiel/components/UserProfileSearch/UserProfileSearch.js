import React from 'react'

export const UserProfileSearch = () => (
  <div className='box clearfix'>
    <div className='col-md-12 clearfix'>
      User Profile Search

      <br />
      <br />

      <form className='form-horizontal'>
        <div className='form-group row clearfix'>
          <label className='control-label col-md-4' htmlFor='search_username'>
            Username:
          </label>
          <div className='col-md-8'>
            <input id='search_username' type='text' className='form-control user_autocomplete' name='username' />
          </div>
        </div>

        <div className='form-group clearfix'>
          <div className='col-md-12'>
            <div className='pull-right'>
              <button className='btn btn-primary'>Search</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
)

export default UserProfileSearch
