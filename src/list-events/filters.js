const filters = {
    wszyscy: {
        label: 'wszyscy',
        predicate: event => true
    },
    dzieci: {
        label: 'dzieci',
        predicate: event => event.target=== 'dzieci'
    },
    kobiety: {
        label: 'kobiety',
        predicate: event => event.target=== 'kobiety'
    },
    mezczyzni: {
        label: 'mężczyźni',
        predicate: event => event.target=== 'męzczyzni'
    },
    seniorzy: {
        label: 'seniorzy',
        predicate: event => event.target=== 'seniorzy'
    },
    mlodziez: {
        label: 'młodzież',
        predicate: event => event.target=== 'młodziez'
    }
};

export default filters