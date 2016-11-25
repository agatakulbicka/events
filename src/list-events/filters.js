const filters = {
    wszyscy: {
        label: 'Wszyscy',
        predicate: event => true
    },
    dzieci: {
        label: 'Dzieci',
        predicate: event => event.target=== 'dzieci'
    },
    kobiety: {
        label: 'Kobiety',
        predicate: event => event.target=== 'kobiety'
    },
    mezczyzni: {
        label: 'Mężczyźni',
        predicate: event => event.target=== 'męzczyzni'
    },
    seniorzy: {
        label: 'Seniorzy',
        predicate: event => event.target=== 'seniorzy'
    },
    mlodziez: {
        label: 'Młodzież',
        predicate: event => event.target=== 'młodziez'
    }
};

export default filters