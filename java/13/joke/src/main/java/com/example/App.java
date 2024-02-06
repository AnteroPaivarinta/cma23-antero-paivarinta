package com.example;

import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.layout.BorderPane;
import javafx.scene.layout.HBox;
import javafx.stage.Stage;
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
        
        HashMap<String, ArrayList<String>> map = new HashMap<String, ArrayList<String>>();
        ArrayList<String> lista = new ArrayList<>();
        lista.add("Answer 1");
        lista.add("Desc 1");
        map.put("Joke 1", lista);

        Button joke = new Button("Show joke");
        Button answerJoke = new Button("Show Answer");
        Button jokeDesc = new Button("Show Desc");

        BorderPane layout = new BorderPane();
        HBox buttons = new HBox();
        buttons.getChildren().addAll(joke, answerJoke, jokeDesc);
        layout.setTop(buttons);

        Label label = new Label("Hei");
        layout.setCenter(label);
        Scene scene = new Scene(layout, 640, 480);

        joke.setOnAction((event) -> {
            ArrayList<String> x = new ArrayList<String>(map.keySet());
            String value = x.get(0);
            label.setText(value);
        });

        answerJoke.setOnAction((event) -> {
            ArrayList<ArrayList<String>> values = new ArrayList<ArrayList<String>>(map.values());
            String value = values.get(0).get(0);
            label.setText(value);
        });

        jokeDesc.setOnAction((event) -> {
            ArrayList<ArrayList<String>> values = new ArrayList<ArrayList<String>>(map.values());
            String value = values.get(0).get(1);
            label.setText(value);
        });



        stage.setScene(scene);
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