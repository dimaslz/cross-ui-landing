import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
  shadow: true,
})
export class AppHome {
  constructor() {
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    console.log('onClick');
  }

  render() {
    return (
      <div class="app-home">
        <section class="min-h-screen flex items-center justify-center flex-col">
          <h1 class="text-6xl">CrossUI</h1>
          <p>Agnostic components for any framework.</p>
        </section>

        <div class="flex p-4">
          <app-menu class="w-64" />

          <div class="Content w-full">
            <stencil-router>
              <stencil-route-switch scrollTopOffset={0}>
                <stencil-route url="/" component="app-introduction" exact={true} />
              </stencil-route-switch>
            </stencil-router>
          </div>
        </div>
      </div>
    );
  }
}

/* 
<stencil-route-link url="/profile/stencil">
          <button>Profile page</button>
        </stencil-route-link>
         */
