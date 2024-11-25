import React from 'react'

export default function LayoverDetails({layover}) {
  return (
    
      <div className="layover-details">
    <p><strong>Layover:</strong> {layover.name} ({layover.id}) - {layover.duration} minutes</p>
  </div>
    
  )
}
