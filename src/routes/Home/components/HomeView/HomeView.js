import React from 'react'
import { Container, Divider, Grid, Header, Label, Button, Segment } from 'semantic-ui-react'
import CarouselContent from '../CarouselContent'
import Slider from 'react-slick'
import '../../styles/HomeView.css'

const HomeView = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return (
    <div>
      <div style={{ background: 'white' }}>
        <Slider {...settings}>
          <div>
            <CarouselContent
              header='TOKI Open Contest - April 2017'
              subheader='Toki monthly open contest lorem ipsum blablablablalalab'
              headerContent={
                <div>
                  <Button primary>Register Now</Button>
                  <Button basic secondary>View detail</Button>
                </div>
              }
              image='https://images-na.ssl-images-amazon.com/images/I/71Ao-WrjMDL._SL1500_.jpg'
            />
          </div>
          <div>
            <CarouselContent
              header='TOKI Open Contest - Mei 2017'
              subheader='Toki monthly open contest lorem ipsum blablablablalalab'
              headerContent={
                <div>
                  <Button primary>Register Now</Button>
                  <Button basic secondary>View detail</Button>
                </div>
              }
              image='https://images-na.ssl-images-amazon.com/images/I/71Ao-WrjMDL._SL1500_.jpg'
            />
          </div>
          <div>
            <CarouselContent
              header='TOKI Open Contest - June 2017'
              subheader='Toki monthly open contest lorem ipsum blablablablalalab'
              headerContent={
                <div>
                  <Button primary>Register Now</Button>
                  <Button basic secondary>View detail</Button>
                </div>
              }
              image='https://images-na.ssl-images-amazon.com/images/I/71Ao-WrjMDL._SL1500_.jpg'
            />
          </div>
        </Slider>
      </div>
      <Divider hidden />
      <Container>
        <Grid columns={3} stackable>
          <Grid.Column>
            <Segment.Group>
              <Segment secondary>
                <Header style={{ fontSize: '1rem', fontWeight: '700' }}>
                  TLX News
                </Header>
              </Segment>
              <Segment style={{ padding: '20px' }}>
                <Header size='tiny' color='blue'>
                  OSN Training update
                  <Header.Subheader style={{ fontSize: '12px', color: '#5d5d66' }}>
                    Yesterday
                  </Header.Subheader>
                </Header>
              </Segment>
              <Segment style={{ padding: '20px', borderTopStyle: 'dotted' }}>
                <Header size='tiny' color='blue'>
                  Traveloka sponsored contest
                  <Header.Subheader style={{ fontSize: '12px', color: '#5d5d66' }}>
                    Yesterday
                  </Header.Subheader>
                </Header>
              </Segment>
              <Segment style={{ padding: '20px', borderTopStyle: 'dotted' }}>
                <Header size='tiny' color='blue'>
                  244 New problems updated
                  <Header.Subheader style={{ fontSize: '12px', color: '#5d5d66' }}>
                    Yesterday
                  </Header.Subheader>
                </Header>
              </Segment>
              <Segment style={{ padding: '20px', borderTopStyle: 'dotted' }}>
                <Button primary>
                  News Archive
                </Button>
              </Segment>
            </Segment.Group>
          </Grid.Column>
          <Grid.Column>
            <Segment.Group>
              <Segment secondary>
                <Header style={{ fontSize: '1rem', fontWeight: '700' }}>
                  Training Gate
                </Header>
              </Segment>
              <Segment style={{ padding: '20px' }}>
                <Header size='tiny' color='blue'>
                  Training Modules
                  <Header.Subheader style={{ fontSize: '1rem' }}>
                    learn basic programming modules, how to compete in OSN or TOKI Pelatnas Learning modules here.
                  </Header.Subheader>
                </Header>
              </Segment>
              <Segment style={{ padding: '20px', borderTopStyle: 'dotted' }}>
                <Header size='tiny' color='blue'>
                  Problem Archives
                  <Header.Subheader style={{ fontSize: '1rem' }}>
                    Train yourself to solve 1,281 problems collected from national
                    and international competition in our system
                  </Header.Subheader>
                </Header>
              </Segment>
              <Segment style={{ padding: '20px', borderTopStyle: 'dotted' }}>
                <Button primary>
                  Enter training gate
                </Button>
              </Segment>
            </Segment.Group>
          </Grid.Column>
          <Grid.Column>
            <Segment.Group>
              <Segment secondary>
                <Header style={{ fontSize: '1rem', fontWeight: '700' }}>
                  Competition Gate
                </Header>
              </Segment>
              <Segment style={{ padding: '20px' }}>
                <Header size='tiny'>
                  <Header.Subheader>
                    Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt.
                  </Header.Subheader>
                </Header>
                <Label basic
                  style={{ padding: 0, border: 0 }}
                  color='green'
                  horizontal>UPCOMING CONTEST</Label>
                <Header size='tiny' color='blue' style={{ marginTop: '1rem' }}>
                  TOKI Open Contest - April 2017
                  <Header.Subheader style={{ fontSize: '12px', color: '#5d5d66' }}>
                    Open in 3 days
                  </Header.Subheader>
                </Header>
              </Segment>
              <Segment style={{ padding: '20px', borderTopStyle: 'dotted' }}>
                <Header size='tiny' color='blue'>
                  Traveloka Collegiate Challenge 2017
                  <Header.Subheader style={{ fontSize: '12px', color: '#5d5d66' }}>
                    Open in 5 days
                  </Header.Subheader>
                </Header>
              </Segment>
              <Segment style={{ padding: '20px', borderTopStyle: 'dotted' }}>
                <Button primary>
                  Enter competition gate
                </Button>
              </Segment>
            </Segment.Group>
          </Grid.Column>
        </Grid>
        <Divider />
        <Grid stackable style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
          <Grid.Column width={8}>
            <Header>
              About TOKI Learning Center
            </Header>
            <Header style={{ marginTop: 0 }}>
              <Header.Subheader>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Header.Subheader>
            </Header>
          </Grid.Column>
          <Grid.Column width={4}>
            <Grid columns={1}>
              <Grid.Column>
                <Header color='blue'>
                  Training Gate
                </Header>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: 0 }}>
                Training Modules
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: 0 }}>
                Problem Archives
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: 0 }}>
                Submissions
              </Grid.Column>
              <Grid.Column>
                Statistics
              </Grid.Column>
            </Grid>
          </Grid.Column>
          <Grid.Column width={4}>
            <Grid columns={1}>
              <Grid.Column>
                <Header color='blue'>
                  Competition Gate
                </Header>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: 0 }}>
                Traveloka Challenge 2017
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: 0 }}>
                TOKI Open Contest - April 2017
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: 0 }}>
                TOKI Open Contest - Mei 2017
              </Grid.Column>
              <Grid.Column>
                TOKI Open Contest - June 2017
              </Grid.Column>
            </Grid>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  )
}

export default HomeView
