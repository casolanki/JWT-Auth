import { animate, animation, state, style, transition, trigger } from '@angular/animations';

export let fade = trigger('animation', [
    transition(':enter', [
    style({ transform: 'translateX(-10px)'}),
    animate(400)
    ]),
    transition(':leave', [
    style({transform: 'translateX(-100%)'}),
    animate('0.5s cubic-bezier(.15,.69,.83,.67)')
    ])
]);


// ***** FadeIn/FadeOut Trigger
// trigger('fade', [
//     state('void', style({ opacity: 0 })),
//     transition(':enter,:leave', [ //'void <=> *'
//         animate(600)
//     ])
// ]);
