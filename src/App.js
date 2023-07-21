import React from 'react'
import './App.css'
import { Dropdown, DropdownMenu, Menu, Container, Icon, Grid } from 'semantic-ui-react'


function App () {

  return (
    <div className='App'>
      <img class="ui mini circular image" src="" alt='logo'/>

      <Container>
        
        <Menu >
          <Menu.Item position='right'>
            <Dropdown text='Sample' >
              <DropdownMenu >
                <Dropdown.Item text='React' icon='react'/>
                <Dropdown.Item text='Angular' icon='angular'/>
                <Dropdown.Item text='Google' icon='google'/>
                <Dropdown.Item text='Instgram' icon='instagram'/>
              </DropdownMenu>
            </Dropdown>
          </Menu.Item>
        </Menu>
      </Container>
      <Container>
        <Dropdown item icon='bars' simple>
          <Dropdown.Menu >
            <Dropdown.Item>
              <Icon name='dropdown' />
                <span className='text'>New</span>
            <Dropdown.Menu>
              <Dropdown.Item>Document</Dropdown.Item>
              <Dropdown.Item>Image</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Item>
          <Dropdown.Item>Open</Dropdown.Item>
          <Dropdown.Item>Save...</Dropdown.Item>
          <Dropdown.Item>Edit Permissions</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Header>Export</Dropdown.Header>
          <Dropdown.Item>Share</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </Container>
      <Container>
        <footer className='footer'>
          <Grid>
            <a href='#'>Google</a>
            <a href='#'>Facebook</a>
            <a href='#'>Instagram</a>
            <a href='#'>LinkedIn</a>
          </Grid>
        </footer>
      </Container>
    </div>
  )
}

export default App