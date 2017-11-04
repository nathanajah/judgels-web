import * as React from 'react'
import { Grid, Header, Image } from 'semantic-ui-react'

interface CarouselContentProps {
  header: string;
  subheader: string;
  headerContent: JSX.Element;
  image: string;
}

const CarouselContent = (props: CarouselContentProps) => {
  const { header, subheader, headerContent, image } = props
  return (
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
}

export default CarouselContent
