export const EVENT = 'EVENT';
export const EventSchema = {
	name: EVENT,
	primaryKey: 'key',
	properties: {
		key: 'string', //primary key
		eventName: 'string',
		eventDesc: 'string',
		createdAt: 'string',
		updateAt: 'string'
	}
};
