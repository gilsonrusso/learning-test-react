import { useAppContext } from '@/context/AppContext'
import Switch from '@mui/material/Switch'

const label = { inputProps: { 'aria-label': 'Switch demo' } }

export default function BasicSwitches() {
  const { isDarkMode, setDarkMode } = useAppContext()

  return (
    <div>
      <Switch
        onChange={() => setDarkMode()}
        {...label}
        defaultChecked
        color={`${isDarkMode === 'dark' ? 'primary' : 'default'}`}
      />
    </div>
  )
}
