import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <div>
        <header class="p-4 flex sticky top-0 left-0 right-0 shadow-sm">
          <h1 class="flex-grow text-2xl uppercase">cross ui</h1>
          <nav class="flex items-center justify-end">
            <ul class="h-full flex divide-x">
              <li class="px-3 flex items-center justify-center">
                <a href="https://github.com/cross-ui">Github</a>
              </li>
            </ul>
          </nav>
        </header>

        {/* <div>
          <cross-button>holi</cross-button>
        </div> */}
        <main class="w-full p-4">
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-home" exact={true} />
              {/* <stencil-route url="/profile/:name" component="app-profile" /> */}
              {/* <stencil-route url="/getting-started" component="app-getting-started" /> */}
              <stencil-route url="/components" component="app-components" />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
