import React from 'react'
import ShimmerCard from './ShimmerCard'
const Shimmer = () => {
  return (

   <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {Array(12).fill("").map((_, i) => (
    <ShimmerCard key={i} />
  ))}
</div>
  )
}

export default Shimmer
