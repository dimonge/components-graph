//{"id":0,  "evolution": 3.0, "x":277, "y": 10, "color": "#70147a", "name":"User" },
export interface INode {
  id: number;
  evolution: number;
  x: number;
  y: number;
  color: string;
  name: string;
}

//{"source":1,"target":0, "cost": 30, "distance": 2},
export interface ILink {
  source: number;
  target: number;
  cost: number;
  distance: number;
}

export type NodesType = Array<INode>;
export type LinksType = Array<ILink>;

export interface IComponents {
  nodes: NodesType;
  links: LinksType;
}

export interface ISearchField {
  onChange: (value: string) => void;
}
