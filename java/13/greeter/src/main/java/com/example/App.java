package com.example;

import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.TextField;
import javafx.scene.layout.GridPane;
import javafx.stage.Stage;

import java.io.IOException;

/**
 * JavaFX App
 */
public class App extends Application {

    private static Scene scene;

    @Override
    public void start(Stage stage) throws IOException {
        GridPane  firstLayout = new GridPane();
        GridPane  secondLayout = new GridPane();
        
        Label inputLabel = new Label("Enter your name");
        TextField textField = new TextField();
        Button start = new Button("Start");
        Label greetings = new Label();
        
        firstLayout.add(inputLabel, 0, 0);
        firstLayout.add(textField, 0, 1);
        firstLayout.add(start, 1, 1);

        secondLayout.add(greetings, 0, 0);

        Scene firstScene = new Scene(firstLayout);
        Scene secondScene = new Scene(secondLayout);


        start.setOnAction((event) -> {
            String x = String.valueOf(textField.getText());
            String greetingsText = "Hello " + x;
            greetings.setText(greetingsText);
            stage.setScene(secondScene);
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