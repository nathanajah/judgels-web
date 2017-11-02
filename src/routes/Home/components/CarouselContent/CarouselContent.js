import React from 'react'
import { Grid, Header, Image } from 'semantic-ui-react'

const CarouselContent = ({ header, subheader, headerContent, image }) => (
  <Grid style={{ minHeight: '40vh', marginLeft: '60px', marginRight: '60px' }} stackable>
    <Grid.Column width={12} verticalAlign='middle'>
      <Header size='huge' style={{ fontWeight: 100 }}>
        {header}
        <Header.Subheader style={{ fontSize: '1rem' }}>
          {subheader}
        </Header.Subheader>
      </Header>
      {headerContent}
    </Grid.Column>
    <Grid.Column width={4} verticalAlign='middle'>
      <Image src={image} />
    </Grid.Column>
  </Grid>
)

CarouselContent.propTypes = {
  header: React.PropTypes.string,
  subheader: React.PropTypes.string,
  headerContent: React.PropTypes.element,
  image: React.PropTypes.string
}

export default CarouselContent
