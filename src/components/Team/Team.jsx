import React from 'react'
import { teams } from '../../../dummy-data/teamData'

const Team = () => {
    return (
      <div className='mt-[103px] mb-28'>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 px-12">
    {teams.map((member) => (
      <div
        key={member.slug_name}
        className="flex flex-col items-center text-center py-10 px-6 rounded-2xl shadow-lg max-w-[280px] h-96 mx-auto"
        style={{
          background:
            "linear-gradient(to bottom left, rgba(232, 225, 254, 0.9), rgba(255, 255, 255, 0.9))",
        }}
      >
        <img
          src={member.image}
          alt={member.name}
          className=" w-[100px] mb-4"
        />
        <h2 className="text-lg font-bold text-text-1 mb-[5px]">{member.name}</h2>
        <h3 className="text-lg text-text-3 mb-2">{member.title_job}</h3>
        <p dir='rtl' className="text-xs text-text-2 leading-[1.75]">{member.description}</p>
      </div>
    ))}
            </div>
        </div>
  )
}

export default Team