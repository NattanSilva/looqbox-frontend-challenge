import { HomeOutlined, MenuOutlined, QqOutlined } from '@ant-design/icons'
import { Button, Drawer, Menu } from 'antd'
import { useState } from 'react'
import { useNavigate } from 'react-router'

export function HamburgerMenu() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <>
      <Button
        type='text'
        icon={<MenuOutlined className='text-white! text-2xl!' />}
        onClick={() => setOpen(true)}
        className='bg-blue-500! rounded-tr-none! rounded-bl-none! hover:scale-110! transition-transform! focus:outline-none! shadow!'
      />

      <Drawer
        title='Menu'
        placement='left'
        onClose={() => setOpen(false)}
        open={open}
      >
        <Menu
          mode='vertical'
          items={[
            {
              key: 'home',
              label: 'Home',
              icon: <HomeOutlined />,
              onClick: () => navigate('/'),
            },
            { key: 'pokemons', label: 'Pokémons', icon: <QqOutlined /> },
          ]}
          onClick={() => setOpen(false)}
        />
      </Drawer>
    </>
  )
}
