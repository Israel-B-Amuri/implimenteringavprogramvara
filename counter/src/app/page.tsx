
import { Container } from '@mui/material'
import Counter1 from '@/Components/Counter1'
import Counter2 from '@/Components/Counter2'
import Counter3 from '@/Components/Counter3'
import Contents from '@/Components/Contents'

export default function Home() {
  return (
    <Container sx={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:'space-between',padding:"24"}}>
      <div>Hello World</div>
      <Counter1><Contents/></Counter1>
      <Counter2 ><Contents/></Counter2>
      <Counter3><Contents/></Counter3>
    </Container>
  )
}
