package com.example;

import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.TextField;
import javafx.scene.layout.BorderPane;
import javafx.scene.layout.HBox;
import javafx.scene.layout.VBox;
import javafx.stage.Stage;
import java.util.*;
import java.util.HashMap;
import java.util.ArrayList;
import java.io.IOException;

/**
 * JavaFX App
 */
public class App extends Application {

    private static Scene scene;

    @Override
    public void start(Stage stage) throws IOException {
        Label globalLabel = new Label("0");
        HashMap<String, String> map = new HashMap<>();
        map.put("Hi", "Hei");
        Button enterNewWords = new Button("Enter New Words");
        Button practice = new Button("Practice");
        Button check = new Button("Check");
        Button addNewPair = new Button("addNewPair");
        
        
        HBox buttonsFirstView = new HBox();
        buttonsFirstView.getChildren().addAll(enterNewWords, practice);

        HBox buttonsSecondView = new HBox();
        Button enterNewWordsTwo = new Button("Enter New Words  // Current is second view");
        Button practiceTwo = new Button("Practice // Current is second view");
        buttonsSecondView.getChildren().addAll(enterNewWordsTwo, practiceTwo);

        

        VBox vboxOne = new VBox();
    
        Label translateLabel = new Label(); //Translate word "sana"
        TextField inputOfTranslate = new TextField();
        Label isCorrect = new Label();
        vboxOne.getChildren().addAll(translateLabel, inputOfTranslate, check, isCorrect);




        BorderPane layoutOne = new BorderPane();
        layoutOne.setTop(buttonsFirstView);
        layoutOne.setCenter(vboxOne);

        Scene firstScene = new Scene(layoutOne, 1000, 1000);
        


        BorderPane layoutTwo = new BorderPane();
        layoutTwo.setTop(buttonsSecondView);

        VBox vbox = new VBox();

        Label word = new Label("Word");
        TextField wordInput = new TextField();
        Label translate = new Label("Translation");
        TextField translateInput = new TextField();

        vbox.getChildren().addAll(word, wordInput, translate, translateInput, addNewPair);
        layoutTwo.setCenter(vbox);

        Scene secondScene = new Scene(layoutTwo, 1000, 1000);

        enterNewWords.setOnAction((event) -> {
            globalLabel.setText("0");
            stage.setScene(firstScene);
        });

        enterNewWordsTwo.setOnAction((event) -> {
            globalLabel.setText("0");
            stage.setScene(firstScene);
        });

        practice.setOnAction((event) -> {
            globalLabel.setText("0");
            ArrayList<String> lista = new ArrayList<>(map.keySet());
            String firstTranslate = lista.get(0);
            translateLabel.setText(firstTranslate);
            stage.setScene(secondScene);
        });

        practiceTwo.setOnAction((event) -> {
            globalLabel.setText("0");
            ArrayList<String> lista = new ArrayList<>(map.keySet());
            String firstTranslate = lista.get(0);
            translateLabel.setText(firstTranslate);
            stage.setScene(secondScene);
        });

        check.setOnAction((event) -> {
            ArrayList<String> lista = new ArrayList<>(map.keySet());
            String answerOfUser = inputOfTranslate.getText();
            if(answerOfUser.equals(map.get(translateLabel.getText()))){
                isCorrect.setText("Correct!");
                int a = Integer.valueOf(globalLabel.getText());
                a = a + 1;
                globalLabel.setText(String.valueOf(a));
                translateLabel.setText(lista.get(a));
            } else {
                isCorrect.setText("Incorrect!");
            }

        });

        addNewPair.setOnAction((event) -> {
            String wordInputValue = wordInput.getText();
            String translationValue = translateInput.getText();
            map.put(wordInputValue, translationValue);
        });


        stage.setScene(firstScene);
        stage.show();
    }

    static void setRoot(String fxml) throws IOException {
        scene.setRoot(loadFXML(fxml));
    }

    private static Parent loadFXML(String fxml) throws IOException {
        FXMLLoader fxmlLoader = new FXMLLoader(App.class.getResource(fxml + ".fxml"));
        return fxmlLoader.load();
    }

    public static void main(String[] args) {
        launch();
    }

}