function init(){
    var site = document.getElementsByName("site").length;
    var dataset = document.getElementsByName("dataset");
    var T_natural = document.getElementById("T_natural");
    var T_image = document.getElementById("T_image");
    var T_video = document.getElementById("T_video");
    var T_audio = document.getElementById("T_audio");
    var P_natural = document.getElementById("P_natural");
    var P_image = document.getElementById("P_image");
    var P_video = document.getElementById("P_video");
    var P_audio = document.getElementById("P_audio");

    if(document.getElementsByName("site")[0].checked == true){
        for(var i=0;dataset.length;i++){
            if(dataset[i].checked){
                dataset[i].checked = false;
            }
            T_natural.style.display = "none";
            T_image.style.display = "none";
            T_video.style.display = "none";
            T_audio.style.display = "none";
            P_natural.style.display = "none";
            P_image.style.display = "none";
            P_video.style.display = "none";
            P_audio.style.display = "none";
        }
    }
    if(document.getElementsByName("site")[1].checked == true){
        for(var i=0;dataset.length;i++){
            if(dataset[i].checked){
                dataset[i].checked = false;
            }
            T_natural.style.display = "none";
            T_image.style.display = "none";
            T_video.style.display = "none";
            T_audio.style.display = "none";
            P_natural.style.display = "none";
            P_image.style.display = "none";
            P_video.style.display = "none";
            P_audio.style.display = "none";
        }
    }
}

function visible(sub){
    var site = document.getElementsByName("site").length;
    var dataset = document.getElementsByName("dataset").length;
    var T_natural = document.getElementById("T_natural");
    var T_image = document.getElementById("T_image");
    var T_video = document.getElementById("T_video");
    var T_audio = document.getElementById("T_audio");
    var P_natural = document.getElementById("P_natural");
    var P_image = document.getElementById("P_image");
    var P_video = document.getElementById("P_video");
    var P_audio = document.getElementById("P_audio");

    switch(sub.value){
        case "natural":
            if(document.getElementsByName("site")[0].checked == true && document.getElementsByName("dataset")[0].checked == true){
                T_natural.style.display = "block";
                T_image.style.display = "none";
                T_video.style.display = "none";
                T_audio.style.display = "none";
                P_natural.style.display = "none";
                P_image.style.display = "none";
                P_video.style.display = "none";
                P_audio.style.display = "none";
            }
            if(document.getElementsByName("site")[1].checked == true && document.getElementsByName("dataset")[0].checked == true){
                T_natural.style.display = "none";
                T_image.style.display = "none";
                T_video.style.display = "none";
                T_audio.style.display = "none";
                P_natural.style.display = "block";
                P_image.style.display = "none";
                P_video.style.display = "none";
                P_audio.style.display = "none";
            }
            break;
        case "image":
            if(document.getElementsByName("site")[0].checked == true && document.getElementsByName("dataset")[1].checked == true){
                T_natural.style.display = "none";
                T_image.style.display = "block";
                T_video.style.display = "none";
                T_audio.style.display = "none";
                P_natural.style.display = "none";
                P_image.style.display = "none";
                P_video.style.display = "none";
                P_audio.style.display = "none";
            }
            if(document.getElementsByName("site")[1].checked == true && document.getElementsByName("dataset")[1].checked == true){
                T_natural.style.display = "none";
                T_image.style.display = "none";
                T_video.style.display = "none";
                T_audio.style.display = "none";
                P_natural.style.display = "none";
                P_image.style.display = "block";
                P_video.style.display = "none";
                P_audio.style.display = "none";
            }
            break;
        case "video":
            if(document.getElementsByName("site")[0].checked == true && document.getElementsByName("dataset")[2].checked == true){
                T_natural.style.display = "none";
                T_image.style.display = "none";
                T_video.style.display = "block";
                T_audio.style.display = "none";
                P_natural.style.display = "none";
                P_image.style.display = "none";
                P_video.style.display = "none";
                P_audio.style.display = "none";
            }
            if(document.getElementsByName("site")[1].checked == true && document.getElementsByName("dataset")[2].checked == true){
                T_natural.style.display = "none";
                T_image.style.display = "none";
                T_video.style.display = "none";
                T_audio.style.display = "none";
                P_natural.style.display = "none";
                P_image.style.display = "none";
                P_video.style.display = "block";
                P_audio.style.display = "none";
            }
            break;
        case "sound":
            if(document.getElementsByName("site")[0].checked == true && document.getElementsByName("dataset")[3].checked == true){
                T_natural.style.display = "none";
                T_image.style.display = "none";
                T_video.style.display = "none";
                T_audio.style.display = "block";
                P_natural.style.display = "none";
                P_image.style.display = "none";
                P_video.style.display = "none";
                P_audio.style.display = "none";
            }
            if(document.getElementsByName("site")[1].checked == true && document.getElementsByName("dataset")[3].checked == true){
                T_natural.style.display = "none";
                T_image.style.display = "none";
                T_video.style.display = "none";
                T_audio.style.display = "none";
                P_natural.style.display = "none";
                P_image.style.display = "none";
                P_video.style.display = "none";
                P_audio.style.display = "block";
            }
            break;
    }
}

function select(){
    var site = document.getElementsByName("site").length;
    var dataset = document.getElementsByName("dataset").length;
    var T_N_detail = document.getElementsByName("T_N_detail").length;
    var T_I_detail = document.getElementsByName("T_I_detail").length;
    var T_V_detail = document.getElementsByName("T_V_detail").length;
    var T_A_detail = document.getElementsByName("T_A_detail").length;
    var P_N_detail = document.getElementsByName("P_N_detail").length;
    var P_I_detail = document.getElementsByName("P_I_detail").length;
    var P_V_detail = document.getElementsByName("P_V_detail").length;
    var P_A_detail = document.getElementsByName("P_A_detail").length;

    if(document.getElementsByName("site")[0].checked == true){
        if(document.getElementsByName("dataset")[0].checked == true){
            if(document.getElementsByName("T_N_detail")[0].checked == true){
                document.getElementById("iframe").src = "https://www.tensorflow.org/text/guide/word_embeddings?hl=ko";
                document.getElementById("name").innerHTML = "&lt;텐서플로우 TensorFlow&gt;";
            }
            if(document.getElementsByName("T_N_detail")[1].checked == true){
                document.getElementById("iframe").src = "https://www.tensorflow.org/tutorials/text/word2vec?hl=ko";
                document.getElementById("name").innerHTML = "&lt;텐서플로우 TensorFlow&gt;";
            }
            if(document.getElementsByName("T_N_detail")[2].checked == true){
                document.getElementById("iframe").src = "https://www.tensorflow.org/text/tutorials/text_classification_rnn?hl=ko";
                document.getElementById("name").innerHTML = "&lt;텐서플로우 TensorFlow&gt;";
            }
            if(document.getElementsByName("T_N_detail")[3].checked == true){
                document.getElementById("iframe").src = "https://www.tensorflow.org/text/tutorials/classify_text_with_bert?hl=ko";
                document.getElementById("name").innerHTML = "&lt;텐서플로우 TensorFlow&gt;";
            }
            if(document.getElementsByName("T_N_detail")[4].checked == true){
                document.getElementById("iframe").src = "https://www.tensorflow.org/text/tutorials/bert_glue?hl=ko";
                document.getElementById("name").innerHTML = "&lt;텐서플로우 TensorFlow&gt;";
            }
            if(document.getElementsByName("T_N_detail")[5].checked == true){
                document.getElementById("iframe").src = "https://www.tensorflow.org/text/tutorials/nmt_with_attention?hl=ko";
                document.getElementById("name").innerHTML = "&lt;텐서플로우 TensorFlow&gt;";
            }
            if(document.getElementsByName("T_N_detail")[6].checked == true){
                document.getElementById("iframe").src = "https://www.tensorflow.org/tutorials/text/image_captioning?hl=ko";
                document.getElementById("name").innerHTML = "&lt;텐서플로우 TensorFlow&gt;";
            }
        }
        if(document.getElementsByName("dataset")[1].checked == true){
            if(document.getElementsByName("T_I_detail")[0].checked == true){
                document.getElementById("iframe").src = "https://www.tensorflow.org/tutorials/images/cnn?hl=ko";
                document.getElementById("name").innerHTML = "&lt;텐서플로우 TensorFlow&gt;";
            }
            if(document.getElementsByName("T_I_detail")[1].checked == true){
                document.getElementById("iframe").src = "https://www.tensorflow.org/tutorials/images/classification?hl=ko";
                document.getElementById("name").innerHTML = "&lt;텐서플로우 TensorFlow&gt;";
            }
            if(document.getElementsByName("T_I_detail")[2].checked == true){
                document.getElementById("iframe").src = "https://www.tensorflow.org/tutorials/images/transfer_learning?hl=ko";
                document.getElementById("name").innerHTML = "&lt;텐서플로우 TensorFlow&gt;";
            }
            if(document.getElementsByName("T_I_detail")[3].checked == true){
                document.getElementById("iframe").src = "https://www.tensorflow.org/tutorials/images/transfer_learning_with_hub?hl=ko";
                document.getElementById("name").innerHTML = "&lt;텐서플로우 TensorFlow&gt;";
            }
            if(document.getElementsByName("T_I_detail")[4].checked == true){
                document.getElementById("iframe").src = "https://www.tensorflow.org/tutorials/images/data_augmentation?hl=ko";
                document.getElementById("name").innerHTML = "&lt;텐서플로우 TensorFlow&gt;";
            }
            if(document.getElementsByName("T_I_detail")[5].checked == true){
                document.getElementById("iframe").src = "https://www.tensorflow.org/tutorials/images/segmentation?hl=ko";
                document.getElementById("name").innerHTML = "&lt;텐서플로우 TensorFlow&gt;";
            }
            if(document.getElementsByName("T_I_detail")[6].checked == true){
                document.getElementById("iframe").src = "https://github.com/tensorflow/hub/blob/master/examples/colab/tf2_object_detection.ipynb";
                document.getElementById("name").innerHTML = "&lt;텐서플로우 TensorFlow&gt;";
            }
        }
        if(document.getElementsByName("dataset")[2].checked == true){
            if(document.getElementsByName("T_V_detail")[0].checked == true){
                document.getElementById("iframe").src = "https://www.tensorflow.org/tutorials/images/cnn?hl=ko";
                document.getElementById("name").innerHTML = "&lt;텐서플로우 TensorFlow&gt;";
            }
            if(document.getElementsByName("T_V_detail")[1].checked == true){
                document.getElementById("iframe").src = "https://www.tensorflow.org/tutorials/images/classification?hl=ko";
                document.getElementById("name").innerHTML = "&lt;텐서플로우 TensorFlow&gt;";
            }
            if(document.getElementsByName("T_V_detail")[2].checked == true){
                document.getElementById("iframe").src = "https://www.tensorflow.org/tutorials/images/transfer_learning?hl=ko";
                document.getElementById("name").innerHTML = "&lt;텐서플로우 TensorFlow&gt;";
            }
            if(document.getElementsByName("T_V_detail")[3].checked == true){
                document.getElementById("iframe").src = "https://www.tensorflow.org/tutorials/images/transfer_learning_with_hub?hl=ko";
                document.getElementById("name").innerHTML = "&lt;텐서플로우 TensorFlow&gt;";
            }
            if(document.getElementsByName("T_V_detail")[4].checked == true){
                document.getElementById("iframe").src = "https://www.tensorflow.org/tutorials/images/data_augmentation?hl=ko";
                document.getElementById("name").innerHTML = "&lt;텐서플로우 TensorFlow&gt;";
            }
            if(document.getElementsByName("T_V_detail")[5].checked == true){
                document.getElementById("iframe").src = "https://www.tensorflow.org/tutorials/images/segmentation?hl=ko";
                document.getElementById("name").innerHTML = "&lt;텐서플로우 TensorFlow&gt;";
            }
            if(document.getElementsByName("T_V_detail")[6].checked == true){
                document.getElementById("iframe").src = "https://github.com/tensorflow/hub/blob/master/examples/colab/tf2_object_detection.ipynb";
                document.getElementById("name").innerHTML = "&lt;텐서플로우 TensorFlow&gt;";
            }
        }
        if(document.getElementsByName("dataset")[3].checked == true){
            if(document.getElementsByName("T_A_detail")[0].checked == true){
                document.getElementById("iframe").src = "https://www.tensorflow.org/tutorials/audio/simple_audio?hl=ko";
                document.getElementById("name").innerHTML = "&lt;텐서플로우 TensorFlow&gt;";
            }
            if(document.getElementsByName("T_A_detail")[1].checked == true){
                document.getElementById("iframe").src = "https://www.tensorflow.org/tutorials/audio/transfer_learning_audio?hl=ko";
                document.getElementById("name").innerHTML = "&lt;텐서플로우 TensorFlow&gt;";
            }
        }
    }
    if(document.getElementsByName("site")[1].checked == true){
        if(document.getElementsByName("dataset")[0].checked == true){
            if(document.getElementsByName("P_N_detail")[0].checked == true){
                document.getElementById("iframe").src = "https://tutorials.pytorch.kr/beginner/transformer_tutorial.html";
                document.getElementById("name").innerHTML = "&lt;파이토치 PyTorch&gt;";
            }
            if(document.getElementsByName("P_N_detail")[1].checked == true){
                document.getElementById("iframe").src = "https://tutorials.pytorch.kr/intermediate/char_rnn_classification_tutorial.html";
                document.getElementById("name").innerHTML = "&lt;파이토치 PyTorch&gt;";
            }
            if(document.getElementsByName("P_N_detail")[2].checked == true){
                document.getElementById("iframe").src = "https://tutorials.pytorch.kr/intermediate/char_rnn_generation_tutorial.html";
                document.getElementById("name").innerHTML = "&lt;파이토치 PyTorch&gt;";
            }
            if(document.getElementsByName("P_N_detail")[3].checked == true){
                document.getElementById("iframe").src = "https://tutorials.pytorch.kr/intermediate/seq2seq_translation_tutorial.html";
                document.getElementById("name").innerHTML = "&lt;파이토치 PyTorch&gt;";
            }
            if(document.getElementsByName("P_N_detail")[4].checked == true){
                document.getElementById("iframe").src = "https://tutorials.pytorch.kr/beginner/text_sentiment_ngrams_tutorial.html";
                document.getElementById("name").innerHTML = "&lt;파이토치 PyTorch&gt;";
            }
            if(document.getElementsByName("P_N_detail")[5].checked == true){
                document.getElementById("iframe").src = "https://tutorials.pytorch.kr/beginner/translation_transformer.html";
                document.getElementById("name").innerHTML = "&lt;파이토치 PyTorch&gt;";
            }
        }
        if(document.getElementsByName("dataset")[1].checked == true){
            if(document.getElementsByName("P_I_detail")[0].checked == true){
                document.getElementById("iframe").src = "https://tutorials.pytorch.kr/intermediate/torchvision_tutorial.html";
                document.getElementById("name").innerHTML = "&lt;파이토치 PyTorch&gt;";
            }
            if(document.getElementsByName("P_I_detail")[1].checked == true){
                document.getElementById("iframe").src = "https://tutorials.pytorch.kr/beginner/transfer_learning_tutorial.html";
                document.getElementById("name").innerHTML = "&lt;파이토치 PyTorch&gt;";
            }
            if(document.getElementsByName("P_I_detail")[2].checked == true){
                document.getElementById("iframe").src = "https://tutorials.pytorch.kr/beginner/fgsm_tutorial.html";
                document.getElementById("name").innerHTML = "&lt;파이토치 PyTorch&gt;";
            }
            if(document.getElementsByName("P_I_detail")[3].checked == true){
                document.getElementById("iframe").src = "https://tutorials.pytorch.kr/beginner/dcgan_faces_tutorial.html";
                document.getElementById("name").innerHTML = "&lt;파이토치 PyTorch&gt;";
            }
            if(document.getElementsByName("P_I_detail")[4].checked == true){
                document.getElementById("iframe").src = "https://tutorials.pytorch.kr/beginner/vt_tutorial.html";
                document.getElementById("name").innerHTML = "&lt;파이토치 PyTorch&gt;";
            }
        }
        if(document.getElementsByName("dataset")[2].checked == true){
            if(document.getElementsByName("P_V_detail")[0].checked == true){
                document.getElementById("iframe").src = "https://tutorials.pytorch.kr/intermediate/torchvision_tutorial.html";
                document.getElementById("name").innerHTML = "&lt;파이토치 PyTorch&gt;";
            }
            if(document.getElementsByName("P_V_detail")[1].checked == true){
                document.getElementById("iframe").src = "https://tutorials.pytorch.kr/beginner/transfer_learning_tutorial.html";
                document.getElementById("name").innerHTML = "&lt;파이토치 PyTorch&gt;";
            }
            if(document.getElementsByName("P_V_detail")[2].checked == true){
                document.getElementById("iframe").src = "https://tutorials.pytorch.kr/beginner/fgsm_tutorial.html";
                document.getElementById("name").innerHTML = "&lt;파이토치 PyTorch&gt;";
            }
            if(document.getElementsByName("P_V_detail")[3].checked == true){
                document.getElementById("iframe").src = "https://tutorials.pytorch.kr/beginner/dcgan_faces_tutorial.html";
                document.getElementById("name").innerHTML = "&lt;파이토치 PyTorch&gt;";
            }
            if(document.getElementsByName("P_V_detail")[4].checked == true){
                document.getElementById("iframe").src = "https://tutorials.pytorch.kr/beginner/vt_tutorial.html";
                document.getElementById("name").innerHTML = "&lt;파이토치 PyTorch&gt;";
            }
        }
        if(document.getElementsByName("dataset")[3].checked == true){
            if(document.getElementsByName("P_A_detail")[0].checked == true){
                document.getElementById("iframe").src = "https://tutorials.pytorch.kr/beginner/audio_io_tutorial.html";
                document.getElementById("name").innerHTML = "&lt;파이토치 PyTorch&gt;";
            }
            if(document.getElementsByName("P_A_detail")[1].checked == true){
                document.getElementById("iframe").src = "https://tutorials.pytorch.kr/beginner/audio_resampling_tutorial.html";
                document.getElementById("name").innerHTML = "&lt;파이토치 PyTorch&gt;";
            }
            if(document.getElementsByName("P_A_detail")[2].checked == true){
                document.getElementById("iframe").src = "https://tutorials.pytorch.kr/beginner/audio_data_augmentation_tutorial.html";
                document.getElementById("name").innerHTML = "&lt;파이토치 PyTorch&gt;";
            }
            if(document.getElementsByName("P_A_detail")[3].checked == true){
                document.getElementById("iframe").src = "https://tutorials.pytorch.kr/beginner/audio_feature_extractions_tutorial.html";
                document.getElementById("name").innerHTML = "&lt;파이토치 PyTorch&gt;";
            }
            if(document.getElementsByName("P_A_detail")[4].checked == true){
                document.getElementById("iframe").src = "https://tutorials.pytorch.kr/beginner/audio_feature_augmentation_tutorial.html";
                document.getElementById("name").innerHTML = "&lt;파이토치 PyTorch&gt;";
            }
            if(document.getElementsByName("P_A_detail")[5].checked == true){
                document.getElementById("iframe").src = "https://tutorials.pytorch.kr/beginner/audio_datasets_tutorial.html";
                document.getElementById("name").innerHTML = "&lt;파이토치 PyTorch&gt;";
            }
            if(document.getElementsByName("P_A_detail")[6].checked == true){
                document.getElementById("iframe").src = "https://tutorials.pytorch.kr/intermediate/speech_recognition_pipeline_tutorial.html";
                document.getElementById("name").innerHTML = "&lt;파이토치 PyTorch&gt;";
            }
            if(document.getElementsByName("P_A_detail")[7].checked == true){
                document.getElementById("iframe").src = "https://tutorials.pytorch.kr/intermediate/speech_command_classification_with_torchaudio_tutorial.html";
                document.getElementById("name").innerHTML = "&lt;파이토치 PyTorch&gt;";
            }
            if(document.getElementsByName("P_A_detail")[8].checked == true){
                document.getElementById("iframe").src = "https://tutorials.pytorch.kr/intermediate/text_to_speech_with_torchaudio.html";
                document.getElementById("name").innerHTML = "&lt;파이토치 PyTorch&gt;";
            }
            if(document.getElementsByName("P_A_detail")[9].checked == true){
                document.getElementById("iframe").src = "https://tutorials.pytorch.kr/intermediate/forced_alignment_with_torchaudio_tutorial.html";
                document.getElementById("name").innerHTML = "&lt;파이토치 PyTorch&gt;";
            }
        }
    }
}