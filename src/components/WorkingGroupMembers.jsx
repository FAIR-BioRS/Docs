/* eslint-disable max-len */
import React from 'react';
import { Icon } from '@iconify/react';

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
  {
    id: 'Bhavesh-Patel',
    name: 'Bhavesh Patel',
    organization: 'California Medical Innovations Institute',
    caption: 'I am me.',
    image:
      'https://ucarecdn.com/7f1f0a27-1bcc-47b2-b155-0d99f22907cb/-/preview/-/crop/1:1/50p,30p/',

    social: {},
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
            <p className="text-xl font-extrabold text-gray-900 mb-1">{member.name}</p>

            <div>
              {member.organization && (
                <div className="flex items-start font-semibold text-sky-700">
                  <span className="mb-1 text-base">{member.organization}</span>
                </div>
              )}
            </div>

            <hr className="my-2" />

            <p className="mb-0 text-lg md:text-base">{member.caption}</p>

            {Object.keys(member.social).length > 0 && <hr className="my-2" />}

            <ul className="flex items-center justify-start sm:mt-0 p-0 space-x-3">
              {'github' in member.social && (
                <li className="flex items-center justify-center transition-all hover:text-sky-600 !mt-0">
                  <a
                    href={member.social.github}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="cursor-newtab flex items-center justify-center text-gray-500"
                  >
                    <Icon icon="mdi:github" width={25} height={25} />
                    <span className="sr-only"> Github page </span>
                  </a>
                </li>
              )}

              {'twitter' in member.social && (
                <li className="flex items-center justify-center transition-all hover:text-sky-600 !mt-0 ">
                  <a
                    href={member.social.twitter}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="cursor-newtab flex items-center justify-center text-gray-500"
                  >
                    <Icon icon="ri:twitter-x-fill" width={25} height={22} />
                    <span className="sr-only"> Twitter page </span>
                  </a>
                </li>
              )}

              {'website' in member.social && (
                <li className="flex items-center justify-center  transition-all hover:text-sky-600 !mt-0 ">
                  <a
                    href={member.social.website}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="cursor-newtab flex items-center justify-center text-gray-500"
                  >
                    <Icon icon="ph:globe" width={25} height={25} />
                    <span className="sr-only"> Twitter page </span>
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
