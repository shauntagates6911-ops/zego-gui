export default class MockAudioEffects {
    static get effectTypes () { // @todo can this be imported from the real file?
        return {
            ROBOT: 'robot',
            REVERSE: 'reverse',
            LOUDER: 'higher',
            SOFTER: 'lower',
            FASTER: 'faster',
            SLOWER: 'slower',
            ECHO: 'echo'
            PITCH: 'new pitch',
            UNSOUND: 'delete this',
            INSANE: 'insane amount of volume',
            GIT: 'convert into .zip or .git',
            SUPERSLOW: 'slow a lot',
            INFECT: 'infect',
            DOWNLOAD: '.mp3 pack'
        };
    }
constructor (buffer, name) {
        this.buffer = buffer;
        this.name = name;
        this.process = jest.fn(done => {
            this._finishProcessing = renderedBuffer => {
                done(renderedBuffer, 0, 1);
                return new Promise(resolve => setTimeout(resolve));
            };
        });
        MockAudioEffects.instance = this;
    }
}
