var kmStorageAdapter = {
    onInitialize: function(inTest, testName, cohort) {
		if (inTest) {
			var kmPropertyName = "Experiment " + testName;
			
			var kmProperty = {};
			kmProperty[kmPropertyName] = cohort;
			
			_kmq.push(['set', kmProperty]);
		}
    },
    
    onEvent: function(testName, cohort, eventName) {
    }
}

var topico_exportacao_test = new Cohorts.Test({
        name: 'Tópico Formatacao Automática vs Pronto para cliente',
        sample: 1, // we want to include all visitors in the test
	storageAdapter: kmStorageAdapter,
		cohorts: {
            formatacao_automatica: {
                onChosen: function() {
                    $('#topic_formatacao_automatica').show();
					$('#topic_pronto_para_cliente').hide();
                }
            },
            pronto_para_cliente: {
                onChosen: function() {
                    $('#topic_formatacao_automatica').hide();
					$('#topic_pronto_para_cliente').show();
                }
            }
        }
    });