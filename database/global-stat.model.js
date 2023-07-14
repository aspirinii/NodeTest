const {DataTypes} = require('sequelize') //extract (specific Object) DataTypes from sequelize

module.exports = (sequelize) => {
	return sequelize.define(
		'GlobalStat',// model name
		{ //property list
			id: {
				autoIncrement: true, // 값 자동증가
				type : DataTypes.INTEGER.UNSIGNED, //형식
				allowNull : false, //빈값허용여부
				primaryKey : true, // 기본키 여부
			},
			cc: { //Country Code
				type : DataTypes.CHAR(2),
				allowNull : false,
			},
			date:{ //컬럼명이됨 
				type : DataTypes.DATEONLY,
				allowNull : false,
			},
			confirmed: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			death : {
				type: DataTypes.INTEGER,
				allowNull: true,
			},
			released : {
				type: DataTypes.INTEGER,
				allowNull: true,
			},
			tested : {
				type: DataTypes.INTEGER,
				allowNull: true,
			},
			testing : {
				type: DataTypes.INTEGER,
				allowNull: true,
			},
			negative : {
				type: DataTypes.INTEGER,
				allowNull: true,
			},
		},
		{
			sequelize, 				// 시큐얼라이즈 인스턴스
			tableName: 'GlobalStat',// 데이터베이스 테이블 이름 
			indexes:[				// 테이블 인덱스
				{
					name: 'PRIMARY',
					unique: true,
					fields:[{ name : 'id' }],
				},
				{
					name: 'ccWitheDate',
					unique: true,
					fields:[{ name : 'cc'}, {name:'date'}],
				}
			],
			timestamps : false, // timestamps 자동생성 X 
		}
	);
};
