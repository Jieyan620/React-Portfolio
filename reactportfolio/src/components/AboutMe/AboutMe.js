import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})


const AboutMe = () => {

  const classes = useStyles()
  const bull = <span className={classes.bullet}>•</span>

  return (

    <Card className={classes.root} style={{ backgroundColor: '#88d8b0', maxWidth:'70vh', color:'white'}}>
      <CardContent>
        <Typography variant="h5" component="h2">
          About{bull}Me
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        </Typography>
        <Typography variant="body2" component="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat non nulla at, culpa sequi libero modi. Corrupti eius sit laudantium doloremque, molestiae nulla? Minima illum inventore repudiandae laudantium sunt nihil.
                <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, incidunt! Ex exercitationem dolores accusamus obcaecati esse asperiores, itaque provident veniam voluptas, eos minus commodi rem ab iure nulla fuga saepe.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" style={{  color: 'white' }}>Learn More</Button>
      </CardActions>
    </Card>
  )

}

export default AboutMe