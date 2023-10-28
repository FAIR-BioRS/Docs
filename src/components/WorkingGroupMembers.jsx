/* eslint-disable max-len */
import React from 'react';

const WORKING_GROUP_MEMBERS = [
  {
    id: 'Sanjay-Soundarajan',
    name: 'Sanjay Soundarajan',
    organization: 'California Medical Innovations Institute',
    caption: 'I am me.',
    image:
      'https://ucarecdn.com/681901a3-d6a0-475d-a8cf-fdf18087a8ec/-/preview/-/crop/1:1/50p,30p/',

    social: {
      website: ['https://sanjaysoundarajan.dev'],
      github: 'https://github.com/megasanjay',
      twitter: 'https://twitter.com/megasanjay',
    },
  },
];

export default function WorkingGroupMembers() {
  return (
    <div className="grid grid-cols-2 gap-6 lg:grid-cols-2">
      {WORKING_GROUP_MEMBERS.map((member) => (
        <div
          className="flex w-full flex-col items-start overflow-hidden rounded-lg border border-solid border-slate-100 md:flex-row "
          key={member.name}
          id={member.id}
        >
          <div className="relative h-full w-full md:w-[45%] ">
            <img
              src={member.image}
              alt="user profile"
              placeholder="blur"
              className="!shadow-none !m-0 h-full object-cover w-full"
            />
          </div>

          <div className="w-full py-8 px-6 text-left md:w-[55%] md:px-4 md:py-2">
            <p className="text-xl font-extrabold text-gray-900 mb-0">{member.name}</p>

            <div>
              {member.organization && (
                <div className="flex items-start font-semibold text-sky-700">
                  <span className="mb-0">{member.organization}</span>
                </div>
              )}
            </div>

            <hr className="my-2" />

            <p className="mb-0 text-lg md:text-base">{member.caption}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
