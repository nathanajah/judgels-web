import React from 'react'
import { LinkedClientPanel } from './LinkedClientPanel'

export const WelcomeView = ({ linkedClients }) => (
  <div className='col-md-12'>
    <h2> Welcome </h2>
    <p> &nbsp; </p>
    <p>Hi, there! You are logged in to Judgels.</p>
    <p> You can now visit one of the following Judgels applications:</p>

    { linkedClients.map(({ label, link }) => <LinkedClientPanel key={link} label={label} link={link} />) } </div>
)

WelcomeView.propTypes = {
  linkedClients: React.PropTypes.arrayOf(React.PropTypes.object)
}
