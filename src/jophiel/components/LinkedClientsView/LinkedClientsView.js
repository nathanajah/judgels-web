import React from 'react'
import LinkedClientsEntry from './LinkedClientsEntry'

export const LinkedClientsView = ({ clients }) => (
  <div className='box clearfix'>
    <div className='col-md-12 clearfix'>
      <p> Other Applications: </p>
      {
        clients.map(
          client => (
            <LinkedClientsEntry
              key={client.link}
              label={client.label}
              link={client.link}
            />
          )
        )
      }
    </div>
  </div>
)

LinkedClientsView.propTypes = {
  clients: React.PropTypes.array
}

export default LinkedClientsView
