export interface PropsContext {
    pokemonValue: any;
    SelectedPokemon: (id: number) => void;
    getPokemon: () => void;
    pokemon?: any
    loading: boolean
}