const fs = require('fs')

fs.readFile('car-mpg.csv', 'utf8', function (err, data) {
  if (err) {
    console.log(`CRAP ${err}`)
  }
  else {
    const lines = data.split('\n')
    const out = []
    for (l of lines) {
      const a = l.replace('\r', '').split(',')
      const b = a[0].replace(/\s+/g, ' ').split(' ')
      const c = b.concat(a[1])
      const d = c.join(',')
      const e = d.replace('.,', '.0,')
      out.push(e)
    }

    console.log('mpg,cylinders,displacement,horsepower,weight,acceleration,model_year,origin,car_name')
    for (row of out) {
      if (!row.includes('?')) {
        console.log(row)
      }
    }
  }
})
