<?php

namespace app\controllers;

use app\models\Author;
use Yii;
use yii\data\Pagination;
use yii\rest\ActiveController;
use yii\data\ActiveDataProvider;

class AuthorController extends ActiveController
{
    public $modelClass = 'app\models\Author';

    public function actions()
    {
        $actions = parent::actions();

        // customize the data provider preparation with the "prepareDataProvider()" method
        $actions['index']['prepareDataProvider'] = [$this, 'prepareDataProvider'];

        return $actions;
    }

    public function prepareDataProvider()
    {
        $query = Author::find();
        $dataProvider = new ActiveDataProvider([
            'query' => $query,
            'pagination' => [
                'pageSize' => 10,
                'page' => Yii::$app->request->get('page')
            ]
        ]);

        return $dataProvider;
    }
}