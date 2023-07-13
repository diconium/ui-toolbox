import React from 'react';
import Avatar from '../Avatar';
import BadgeContainer from '../Badge/BadgeContainer';
import Icon from '../Icon';
import StateContainer from '../State/StateContainer';
import SideNavigation from './SideNavigation';

export default {
  title: 'Toolbox/SideNavigation',
  component: SideNavigation,
  parameters: {
    viewport: { defaultViewport: 'lg' },
    layout: 'fullscreen',
  },
};

export function Default() {
  return (
    <div className="bg-toolbox-neutral-50">
      <SideNavigation
        top={
          <div className="flex flex-col">
            <a
              href="/"
              className="flex place-items-center gap-3 py-1 hover:text-toolbox-primary-900"
            >
              <StateContainer
                color="bg-toolbox-feedback-green"
                size="lg"
              >
                <Avatar
                  link="https://i.pravatar.cc/151?u=08188"
                  alt="Mike"
                />
              </StateContainer>
              <span className="font-semibold whitespace-nowrap">PROFILE</span>
            </a>
            <a
              href="/"
              className="flex place-items-center gap-3 py-1 hover:text-toolbox-primary-900"
            >
              <BadgeContainer badge={25}>
                <Icon
                  icon="message-circle"
                  size="lg"
                />
              </BadgeContainer>
              <span className="font-semibold whitespace-nowrap">INBOX</span>
            </a>
          </div>
        }
        bottom={
          <div className="flex flex-col">
            <button type="button">
              <a
                href="/"
                className="flex place-items-center gap-3 hover:text-toolbox-primary-900"
              >
                <Icon
                  icon="arrow-right-from-bracket"
                  size="lg"
                />
                <span className="font-semibold whitespace-nowrap">LOGOUT</span>
              </a>
            </button>
            <small className="block text-center mt-8">V0.4.6</small>
          </div>
        }
      >
        <div className="flex flex-col">
          <a
            href="/"
            className="flex place-items-center gap-3 py-1 hover:text-toolbox-primary-900"
          >
            <Icon
              icon="calendar-lines"
              size="lg"
            />
            <span className="font-semibold whitespace-nowrap">BOOKINGS</span>
          </a>
          <a
            href="/"
            className="flex place-items-center gap-3 py-1 hover:text-toolbox-primary-900"
          >
            <Icon
              icon="users"
              size="lg"
            />
            <span className="font-semibold whitespace-nowrap">TEAMS</span>
          </a>
        </div>
      </SideNavigation>
    </div>
  );
}

export function Closed() {
  return (
    <div className="bg-toolbox-neutral-50">
      <SideNavigation
        closed
        top={
          <div className="flex flex-col">
            <a
              href="/"
              className="flex place-items-center gap-3 py-1 hover:text-toolbox-primary-900"
            >
              <StateContainer
                color="bg-toolbox-feedback-green"
                size="lg"
              >
                <Avatar
                  link="https://i.pravatar.cc/151?u=08188"
                  alt="Mike"
                />
              </StateContainer>
              <span className="font-semibold whitespace-nowrap">PROFILE</span>
            </a>
            <a
              href="/"
              className="flex place-items-center gap-3 py-1 hover:text-toolbox-primary-900"
            >
              <BadgeContainer badge={25}>
                <Icon
                  icon="message-circle"
                  size="lg"
                />
              </BadgeContainer>
              <span className="font-semibold whitespace-nowrap">INBOX</span>
            </a>
          </div>
        }
        bottom={
          <div className="flex flex-col">
            <button type="button">
              <a
                href="/"
                className="flex place-items-center gap-3 hover:text-toolbox-primary-900"
              >
                <Icon
                  icon="arrow-right-from-bracket"
                  size="lg"
                />
                <span className="font-semibold whitespace-nowrap">LOGOUT</span>
              </a>
            </button>
            <small className="block text-center mt-8">V0.4.6</small>
          </div>
        }
      >
        <div className="flex flex-col">
          <a
            href="/"
            className="flex place-items-center gap-3 py-1 hover:text-toolbox-primary-900"
          >
            <Icon
              icon="calendar-lines"
              size="lg"
            />
            <span className="font-semibold whitespace-nowrap">BOOKINGS</span>
          </a>
          <a
            href="/"
            className="flex place-items-center gap-3 py-1 hover:text-toolbox-primary-900"
          >
            <Icon
              icon="users"
              size="lg"
            />
            <span className="font-semibold whitespace-nowrap">TEAMS</span>
          </a>
        </div>
      </SideNavigation>
    </div>
  );
}
